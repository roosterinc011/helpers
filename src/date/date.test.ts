import {
    dataBrasileira,
    isDataBrasileira,
    isDataIso,
    stringParaData,
} from "./date";

describe("Testes de Data", () => {
    let date: Date;
    let strBr: string;
    let strIso: string;

    beforeAll(() => {
        date = new Date("2021-12-31");

        strBr = "10/12/2023";

        strIso = "2023-07-23";
    });
    test("should format Data Brasileira", () => {
        expect(dataBrasileira(date)).toBe("31/12/2021");
    });

    test("should verificar strings", () => {
        expect(isDataBrasileira(strBr)).toBeTruthy();

        expect(isDataBrasileira(strIso)).toBeFalsy();

        expect(isDataIso(strBr)).toBeFalsy();

        expect(isDataIso(strIso)).toBeTruthy();
    });

    test("should converter string para data", () => {
        expect(stringParaData(strBr).toISOString()).toBe(
            "2023-12-10T00:00:00.000Z"
        );

        expect(stringParaData(strIso).toISOString()).toBe(
            "2023-07-23T00:00:00.000Z"
        );

        expect(() => stringParaData("123123")).toThrowError();
    });
});
