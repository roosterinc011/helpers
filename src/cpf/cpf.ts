export function mascaraCpf(cpf: string) {
    return formatarCpf(cpf).replace(
        /^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,
        "$1.$2.$3-$4"
    );
}

export function formatarCpf(cpf: string) {
    return cpf.replace(/\D/g, "").substring(0, 11).padStart(11, "0");
}
