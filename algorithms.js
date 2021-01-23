//BubbleSort - sort numbers of an array

var randomNumbers = [
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50)
]

for (let i = 0; i < randomNumbers.length; i++) {
    for (let j = 0; j < randomNumbers.length - 1; j++) {
        if (randomNumbers[j] > randomNumbers[j+1]) {
            var temporary
            temporary = randomNumbers[j+1]
            randomNumbers[j+1] = randomNumbers[j]
            randomNumbers[j] = temporary
        }
    }
}

console.log(randomNumbers)

// Construir um algoritmo que leia 2 números 
// e efetue a adição. Caso o valor somado seja 
// maior que 20, este deverá ser apresentando 
// somando-se a ele mais 8; caso o valor somado 
// seja menor ou igual a 20, este deverá ser 
// apresentado subtraindo-se 5 

function twoNumbers (n1, n2) {

    var soma = n1 + n2

    soma > 20 ? console.log(soma + 8) : console.log(soma - 5);


}

twoNumbers(19, 1)


// Crie um script que receba um número, e gere a 
// tabuada completa de multiplicação deste número.

function multiplicationTable (number) {

    for (var i = 0; i <= 10; i++) {
        console.log(
            number + ' x ' + i + ' = ' + number * i
        )
    }

}

multiplicationTable(6)

/* Maria quer viajar até a casa de sua irmã, 
de carro, e gostaria de saber, antecipadamente, 
quantos litros de gasolina irá gastar e qual o 
valor que terá de desembolsar pelo combustível 
gasto na viagem. Faça um script que receba : 
a.	A distância da casa de Maria até a casa de sua 
irmã, em km; 
b.	O consumo de seu carro, em km/litro; 
c.	O preço da gasolina no posto onde Maria 
abastece. 
Em seguida, mostre para Maria o valor que a 
mesma gastará com combustível na viagem e quantos 
litros o carro consumirá; */

function tripConsumption (distance, consuptionKM, price) {

    let fuelConsuption = distance / consuptionKM
    let totalPrice = price * fuelConsuption

    console.log('R$' + totalPrice.toFixed(0))
    console.log(fuelConsuption.toFixed(0) + ' litros')

}

tripConsumption(200, 13, 5)

// Calcular a quantidade de dinheiro gasta 
// por um fumante. Dados: o número de anos que 
// ele fuma, o nº de cigarros fumados por dia e 
// o preço de uma carteira.

function smokerCost (years, cigaretteByDay, price) {

    price = 5
    years = 9
    cigaretteByDay = 16

    // Saber o custo da carteira sobre a quantidade
    // de cigarros fumados por dia

    let unidadeCigarrosCarteira = 20
    let custoPorDia = cigaretteByDay / unidadeCigarrosCarteira

    let totalDays = 365 * 9

    console.log('Total gasto: R$' + (custoPorDia * price) * totalDays)

}

smokerCost()


// Criar uma função para calcular o imposto de 
// renda dos contribuintes, renda mensal 
// serão valores fornecidos pelo usuário. 

/* Os valores para cálculo do imposto são: 

Renda Líquida	        Alíquota
Até 3 salários mínimos	Isento
    3 salários mínimos	7%
    4 salários mínimos	15%
    5 salários mínimos	22%
   +6 salários mínimos	27% */

function tribute (salary) {

    let minimumSalary = 1100
    var valueTribute

    if (salary <= minimumSalary * 3) {
        console.log('Isento de Imposto')
    } else if (salary > minimumSalary * 3 && salary < minimumSalary * 4) {
        valueTribute = salary * 0.07
        console.log(`Imposto a pagar:  ${valueTribute}`)
    } else if (salary >= minimumSalary * 4 && salary < minimumSalary * 5) {
        valueTribute = salary * 0.15
        console.log(`Imposto a pagar:  ${valueTribute}`)
    } else if (salary >= minimumSalary * 5 && salary < minimumSalary * 6) {
        valueTribute = salary * 0.22
        console.log(`Imposto a pagar:  ${valueTribute}`)
    } else {
        valueTribute = salary * 0.27
        console.log(`Imposto a pagar:  ${valueTribute}`)
    }

}

console.log(tribute(10000))


// Faça um programa que receba dois números, 
// o primeiro será o número a calcular e o segundo 
// será o final da tabuada, neste caso haverá 
// também um operador que o usuário informará 
// para mostrar o resultado .

function twoNum (n1, operator, n2) {

    switch (operator) {
        case '+':
            return n1 + n2
            break

        case '-':
            return n1 - n2
            break

        case '*':
            return n1 * n2
            break

        case '/':
            return n1 / n2
            break
    }

}

console.log(twoNum(5, '+', 4))

// Faça um programa que armazene 10 números 
// em um vetor e informe qual é par e qual é ímpar.

function arr (n1,n2,n3,n4,n5,n6,n7,n8,n9,n10) {

    let vetor = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]

    for (let i = 0; i <= vetor.length; i++) {

        if (vetor[i] % 2 == 0) {
            console.log(vetor[i] + ' é um número par')
        } else if (vetor[i] % 2 != 0) {
            console.log(vetor[i] + ' é um número ímpar')
        }

    }

}

arr(1,3,5,7,9,8,2)


