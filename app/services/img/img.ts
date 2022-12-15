function importAll(r) {
    return r.keys().map(r);
}
export const images = importAll(require.context('@assets/img/', false, /\.(png|jp?g|svg)$/))
