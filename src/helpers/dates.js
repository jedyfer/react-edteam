/* esto no se usa pero lo guardo como referencia */

const parseToDate = (d) => {
    /* d : timestamp */
    const date = new Date(d);

    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
}