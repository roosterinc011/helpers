export function dataBrasileira(date: Date, options: Intl.DateTimeFormatOptions = { timeZone: "UTC" } ) {
    return Intl.DateTimeFormat('pt-BR', options).format(date);
}

export function stringParaData(str: string) {
    if (isDataIso(str)) {
        return new Date(str);
    }

    if (isDataBrasileira(str)) {
        const [dia, mes, ano] = str.split("/");

        return new Date(`${ano}-${mes}-${dia}z`);
    }

    throw new Error(`${str} fora da formatação de data, Insira uma data válida.`);
}

export function isDataBrasileira(str: string) {
    const br = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/[0-9]{4}$/;
    return br.test(str);
}

export function isDataIso(str: string) {
    const iso = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    return iso.test(str);
}
