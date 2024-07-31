// Performs **actual** modulo division, since `%` can
// return negative values.
export default function mod(p: number, q: number): number {
    return ((p % q) + q) % q;
}