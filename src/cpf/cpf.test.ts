import { formatarCpf, mascaraCpf } from "./cpf";

describe('Testes de CPF', () => { 
    test('should format CPF', () => { 
        expect(formatarCpf("123-456-789-01")).toBe("12345678901");

        expect(formatarCpf("123-/;.;/456,;,/;.,-789,/;.,/;.,/;.,/-01")).toBe("12345678901");

        expect(formatarCpf("")).toBe("00000000000");
        
        expect(formatarCpf("12345678901123")).toBe("12345678901");
     })

     test('should mascarar CPF', () => { 
        expect(mascaraCpf("12345678901")).toBe("123.456.789-01");

        expect(mascaraCpf("123-/;.;/456,;,/;.,-789,/;.,/;.,/;.,/-01")).toBe("123.456.789-01");

        expect(mascaraCpf("")).toBe("000.000.000-00");
        
        expect(mascaraCpf("12345678901123")).toBe("123.456.789-01");
      })
 })
