<script lang="ts">
	let a = false;
	let b = false;
	$: c = a !== b;
</script>

<svg viewBox="-50 40 450 120" xmlns="http://www.w3.org/2000/svg">
	<!-- Input wires -->
	<path d="M40 70 L127 70" />
	<path d="M40 130 L127 130" />

	<!-- XOR gate -->
	<path d="M130 49 C170 50, 220 80, 230 100" />
	<path d="M130 151 C170 150, 220 120, 230 100" />
	<path d="M115 55 Q165 100, 115 145" />
	<path d="M130 50 Q180 100, 130 150" />

	<!-- Buttons -->
	<circle
		cx="30"
		cy="70"
		r="15"
		on:click={() => (a = !a)}
		aria-hidden="true"
		class:on={a}
		class="input"
	/>
	<circle
		cx="30"
		cy="130"
		r="15"
		on:click={() => (b = !b)}
		aria-hidden="true"
		class:on={b}
		class="input"
	/>

	<!-- Output wire and LED -->
	<path d="M230 100 L320 100" />
	<circle cx="320" cy="100" r="15" class:on={c} />
</svg>

<style>
	path {
		stroke-linecap: round;
		stroke: white;
		stroke-width: 5;
		fill: none;
	}

	circle {
		fill: #2c2c2c;
		transition:
			fill 0.15s,
			r 0.2s;
		stroke: white;
		stroke-width: 5;
	}

	circle:hover {
		r: 18;
	}

	.input {
		cursor: pointer;
	}

	.on {
		fill: #738cff;
	}

	svg {
		height: 80%;
	}
</style>
