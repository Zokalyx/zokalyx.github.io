<script lang="ts">
	import { onMount, SvelteComponent, type ComponentType } from 'svelte';

	import mod from '../util/mod';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	// List of tabs/sections to be cycled through
	export let tabs: {
		title: string;
		font: string;
		color: string;
		content: ComponentType<SvelteComponent<{}>>;
		rowGap?: string;
		colGap?: string;
	}[];

	// Selected tab. This value can have
	// a fractional part to represent progress between tabs.
	// This value can "overflow" into negatives or big numbers,
	// since we can always get the actual tab by applying the modulo
	// function.
	let tabSelectionBase = tweened(0, {
		duration: 800,
		easing: cubicInOut
	});
	$: tabSelection = mod($tabSelectionBase, tabs.length);
	$: roundedSelection = Math.round(tabSelection);

	// Percentage (0 to 1) that represents "how" selected the tab is.
	let tabSelectionStrength = tweened(1.0, {
		duration: 300,
		easing: cubicInOut
	});
	$: strongSelection = $tabSelectionStrength > 0.5;

	// Selected title and neighboring ones
	$: prevPrevTitle = tabs[mod(roundedSelection - 2, tabs.length)].title;
	$: prevTitle = tabs[mod(roundedSelection - 1, tabs.length)].title;
	$: currTitle = tabs[mod(roundedSelection, tabs.length)].title;
	$: nextTitle = tabs[mod(roundedSelection + 1, tabs.length)].title;
	$: nextNextTitle = tabs[mod(roundedSelection + 2, tabs.length)].title;

	// Must be odd.
	const visibleTitleCount = 5;
	$: visibleTitles = [prevPrevTitle, prevTitle, currTitle, nextTitle, nextNextTitle];

	// The current title is displayed in a special way so we need this.
	$: currFont = tabs[mod(roundedSelection, tabs.length)].font;
	$: currColor = tabs[mod(roundedSelection, tabs.length)].color;
	$: currColGap = tabs[mod(roundedSelection, tabs.length)].colGap ?? '5em';
	$: currRowGap = tabs[mod(roundedSelection, tabs.length)].rowGap ?? '1.5em';

	// Tab switching animation progress (goes from -0.5 to 0.5)
	$: tabSwitchProgress = tabSelection - roundedSelection;

	let random = 0;
	onMount(() => {
		document.addEventListener('keydown', handleKeyboardNavigation);
		setTimeout(() => {
			// Hack to make tab buttons work on Firefox. TF!?
			random = 0.0000001;
		}, 100);

		return () => {
			document.removeEventListener('keydown', handleKeyboardNavigation);
		};
	});

	// Selects the specified tab.
	// Takes the shortest path to it (either left or right).
	// Temporarily reduces the tab selection strength.
	function select(newSelection: number) {
		tabSelectionStrength.set(0.0);

		let leftDistance = tabSelection - newSelection;
		if (leftDistance < 0) {
			leftDistance += tabs.length;
		}

		let rightDistance = newSelection - tabSelection;
		if (rightDistance < 0) {
			rightDistance += tabs.length;
		}

		if (leftDistance < rightDistance) {
			tabSelectionBase.set($tabSelectionBase - leftDistance);
		} else {
			tabSelectionBase.set($tabSelectionBase + rightDistance);
		}

		setTimeout(() => {
			tabSelectionStrength.set(1.0);
		}, 500);
	}

	// Selects adjacent tabs based on an (integer) offset.
	function selectNext(offset: number) {
		select(mod(Math.round($tabSelectionBase + offset), tabs.length));
	}

	// Allows the user to switch tabs using the arrow keys.
	function handleKeyboardNavigation(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			selectNext(1);
		} else if (event.key === 'ArrowLeft') {
			selectNext(-1);
		}
	}

	let touchstartX: number;
	let touchstartY: number;
	let touchmoveX: number | null = null;
	let touchmoveY: number | null = null;

	// Allows the user to switch tabs by swiping on the screen
	function handleSwipeNavigation(event: TouchEvent) {
		if (event.type === 'touchstart') {
			touchstartX = event.touches[0].screenX;
			touchstartY = event.touches[0].screenY;
		} else if (event.type === 'touchmove') {
			touchmoveX = event.touches[0].screenX;
			touchmoveY = event.touches[0].screenY;
		} else if (event.type === 'touchend') {
			if (touchmoveX === null || touchmoveY === null) return;

			let deltaX = touchmoveX - touchstartX;
			let deltaY = touchmoveY - touchstartY;
			touchmoveX = null;
			touchmoveY = null;

			if (Math.abs(deltaY) > Math.abs(deltaX) || Math.abs(deltaX) < 150 || deltaX === 0) return;

			selectNext(-Math.sign(deltaX));
			// This will fail unless the user has **tapped** on the screen
			// (Swiping by itself is not enough).
			// Should this be removed?
			navigator.vibrate(30);
		}
	}
</script>

<div
	on:touchstart={handleSwipeNavigation}
	on:touchmove={handleSwipeNavigation}
	on:touchend={handleSwipeNavigation}
	class="main-container"
	style="
		--bg-color-percentage: {strongSelection ? 200 * ($tabSelectionStrength - 0.5) : 0}%;
		--current-bg: {currColor};
		--margin-x: {2 - Math.sqrt($tabSelectionStrength)}em;
	"
>
	<div class="name-container">
		<h1 class="name">Francisco Russo</h1>
	</div>

	<div
		class="title-container"
		on:touchmove
		on:wheel={(event) => {
			event.preventDefault();
			event.deltaY > 0 ? selectNext(1) : selectNext(-1);
		}}
	>
		{#each visibleTitles as title, i}
			<!-- Relative: The current has an index of 0.
			 	 Going left subtracts and going right increasese this index.
				 Can be fractional. -->
			{@const relative = i - Math.floor(visibleTitleCount / 2) - tabSwitchProgress}
			{@const relativeAbs = Math.abs(relative)}
			<!-- Absolute: This is the actual index of the section.
			 	 Is always an integer. -->
			{@const absolute = mod(i - Math.floor(visibleTitleCount / 2) + roundedSelection, tabs.length)}
			<button
				class="title-wrapper"
				style="
					--translateX-distance: calc({18 * relative}vw + {2 * relative}em);
					--translateY-distance: {-1.0 * relativeAbs}em;
					--translateZ-distance: {10 * relativeAbs}px;
					--rotateY-angle: {-10 * relative}deg;
					--scaleY-factor: {1.0 + 0.25 * relativeAbs};
					--scaleX-factor: {1.0 - 0.6 * relativeAbs};
					--hack-factor: {random};
				"
				on:click={() => {
					select(absolute);
					navigator.vibrate(30);
				}}
			>
				<div
					class="title"
					style="
						--opacity-value: {1.8 - relativeAbs};
						--gradient-angle: {relative < 0 ? 90 : 270}deg;
						--gradient-black-percentage: {-75 + 50 * relativeAbs}%;
						--gradient-white-percentage: {50 + 50 * relativeAbs}%;
					"
				>
					{title}
				</div>
			</button>
		{/each}

		<div
			class="color current-title-container"
			style="
				--border-radius-value: {-2 * ($tabSelectionStrength - 0.5)}em;
			"
		>
			<h2
				class="current-title"
				style="
					--font-family-value: '{currFont}', sans-serif;
					--translateX-distance: {-60 * tabSwitchProgress}em;
				"
			>
				{currTitle}
			</h2>
		</div>

		<div
			class="left current-title-container-filet"
			style="--scaleX-factor: {strongSelection ? 2 * ($tabSelectionStrength - 0.5) : 0.0};"
		></div>
		<div
			class="right current-title-container-filet"
			style="--scaleX-factor: {strongSelection ? 2 * ($tabSelectionStrength - 0.5) : 0.0};"
		></div>
	</div>

	<div
		class="color content-container"
		style="
			--translateY-distance: {-0.0 + (strongSelection ? -1 : -Math.sqrt(2 * $tabSelectionStrength))}em;
			--box-shadow-opacity: {$tabSelectionStrength};
			--row-gap-value: {currRowGap};
			--col-gap-value: {currColGap};
		"
	>
		{#each tabs as section, i}
			{#if i === tabSelection}
				<div class="content" transition:slide={{ axis: 'y', duration: 300 }}>
					<svelte:component this={section.content} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	/* MAIN */

	.main-container {
		--default-bg: #d0d0d0;
		--current-title-container-height: 4em;
		--current-title-container-width: 12em;
		--current-title-container-border-radius: 1em;
		--final-background-color: color-mix(
			in srgb,
			var(--current-bg) var(--bg-color-percentage),
			var(--default-bg)
		);
		/* Without this distance, sometimes a small gap can be seen between divs. */
		--seam-fill-distance: 0.1em;
	}

	/* NAME BAR */

	.name-container {
		margin: 0;
		padding: 0.5em 0 0 0;
		background-color: rgb(0, 0, 0);
	}

	.name {
		margin: 0;
		padding: 0;
		color: white;
		text-align: center;
		font-family: 'Agbalumo', cursive;
	}

	.name::selection {
		color: black;
		background-color: var(--final-background-color);
	}

	/* TAB SELECTION BAR */

	.title-container {
		display: -ms-grid;
		display: grid;

		place-items: center;
		overflow: hidden;
		padding-bottom: 1em;
		padding-top: 1em;
		background-color: rgb(0, 0, 0);
		cursor: ew-resize;
		user-select: none;

		-webkit-perspective: 30px;
		-moz-perspective: 30px;
		perspective: 30px;
	}

	.title-container > * {
		grid-area: 1 / 1;
	}

	.title-wrapper {
		cursor: pointer;
		outline: none;
		border: none;
		background-color: transparent;

		-webkit-transform: translate3d(
				var(--translateX-distance),
				var(--translateY-distance),
				var(--translateZ-distance)
			)
			rotateY(var(--rotateY-angle))
			scale(calc(var(--scaleX-factor) + var(--hack-factor)), var(--scaleY-factor));

		-ms-transform: translate3d(
				var(--translateX-distance),
				var(--translateY-distance),
				var(--translateZ-distance)
			)
			rotateY(var(--rotateY-angle))
			scale(calc(var(--scaleX-factor) + var(--hack-factor)), var(--scaleY-factor));

		transform: translate3d(
				var(--translateX-distance),
				var(--translateY-distance),
				var(--translateZ-distance)
			)
			rotateY(var(--rotateY-angle))
			scale(calc(var(--scaleX-factor) + var(--hack-factor)), var(--scaleY-factor));
	}

	.title {
		font-weight: bold;
		font-family: 'Outfit';
		color: transparent;
		opacity: var(--opacity-value);
		background-image: linear-gradient(
			var(--gradient-angle),
			black var(--gradient-black-percentage),
			white var(--gradient-white-percentage)
		);
		-webkit-background-clip: text;
		background-clip: text;

		transition: color 200ms;
	}

	.title:hover {
		color: rgba(255, 255, 255, 0.3);
	}

	.current-title-container {
		z-index: 1;
		border-top-left-radius: var(--current-title-container-border-radius);
		border-top-right-radius: var(--current-title-container-border-radius);
		height: var(--current-title-container-height);
		width: var(--current-title-container-width);
		display: grid;
		place-items: center;
		overflow-x: hidden;
		-webkit-transform: translateY(var(--seam-fill-distance));
		-ms-transform: translateY(var(--seam-fill-distance));
		transform: translateY(var(--seam-fill-distance));
		border-bottom-left-radius: var(--border-radius-value);
		border-bottom-right-radius: var(--border-radius-value);
	}

	.current-title {
		margin: 0;
		text-align: center;
		font-size: 2em;
		color: black;
		-webkit-transform: translateX(var(--translateX-distance));
		-ms-transform: translateX(var(--translateX-distance));
		transform: translateX(var(--translateX-distance));
		font-family: var(--font-family-value), sans-serif;
	}

	.current-title-container-filet {
		--filet-size: var(--current-title-container-border-radius);
		--translateX-distance: calc(
			var(--translateX-direction) *
				(
					var(--current-title-container-width) / 2 + var(--filet-size) / 2 -
						var(--seam-fill-distance)
				)
		);
		--translateY-distance: calc(
			var(--current-title-container-height) / 2 - var(--filet-size) / 2 + var(--seam-fill-distance)
		);

		height: var(--filet-size);
		width: var(--filet-size);
		-webkit-transform: translate(var(--translateX-distance), var(--translateY-distance))
			scaleX(var(--scaleX-factor));
		-ms-transform: translate(var(--translateX-distance), var(--translateY-distance))
			scaleX(var(--scaleX-factor));
		transform: translate(var(--translateX-distance), var(--translateY-distance))
			scaleX(var(--scaleX-factor));

		background-size: 50% 50%;
		background: radial-gradient(
			var(--circle-position),
			transparent 63%,
			var(--final-background-color) 65%
		);
	}

	.left {
		--translateX-direction: -1;
		--circle-position: circle at top left;
		-webkit-transform-origin: right;
		-ms-transform-origin: right;
		transform-origin: right;
	}

	.right {
		--translateX-direction: 1;
		--circle-position: circle at top right;
		-webkit-transform-origin: left;
		-ms-transform-origin: left;
		transform-origin: left;
	}

	/* CONTENT */

	.content-container {
		border-radius: 1em 1em;
		margin-left: var(--margin-x);
		margin-right: var(--margin-x);
		padding: 2.5em 2em 2.5em 2em;
		color: black;

		-webkit-transform: translateY(var(--translateY-distance));
		-ms-transform: translateY(var(--translateY-distance));
		transform: translateY(var(--translateY-distance));
		box-shadow: 0 1.5em 1em rgba(30, 30, 30, var(--box-shadow-opacity));
	}

	.content {
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: var(--col-gap-value);
		row-gap: var(--row-gap-value);
		overflow: visible !important;
	}

	/* COMMON */

	.color {
		background-color: var(--final-background-color);
	}
</style>
