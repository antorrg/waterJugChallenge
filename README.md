# waterJugChallenge
Api rest design for technical challenge

Esta API resuelve el problema de medir exactamente Z galones utilizando dos jarras de X e Y galones. La API está construida con Express y utiliza Sequelize para interactuar con una base de datos PostgreSQL.

## Endpoints

### 1. Crear una solución
- **Endpoint**: `/api/jugs/create`
- **Método**: `POST`
- **Descripción**: Crea una solución para medir exactamente Z galones con jarras de X e Y galones.
- **Request**:
  ```json
  {
    "x_capacity": 3,
    "y_capacity": 5,
    "z_amount_wanted": 4
  }

## Configuracion y ejecucion:
### Requerimientos:
- Node.js version 18 o superior
### Inicializar la applicacion:
- Clonar el repositorio en alguna carpeta de su computadora.
- En la terminal de bash o powershell situarse en el directorio raíz (donde se encuentra el archivo `package.json`): 
```bash
> cd waterJugChallenge
```
- Instalar las dependencias
```bash
> npm install
```
Puede elegir entre declarar una variable de entorno o inicializar el servidor directamente, por defecto se iniciará en el puerto 3001.
- Inicializar el servidor:
```bash
> npm start
```
- Para ejecutar los tests el comando es: 
```bash
> npm test
```
Puede correr test unitarios o un test integral

Test unitarios:
los test unitarios son tres:

01-validateJug
02-checkFeasibility
03-jugService

El test integral se ejecuta

## Explicación del Algoritmo
El algoritmo para resolver el problema de las jarras de agua se basa en los siguientes pasos:

Calcular el MCD (Máximo Común Divisor) de X e Y:
El MCD de dos números es el mayor número que puede dividir a ambos sin dejar un residuo.

Verificar que Z sea múltiplo del MCD de X e Y:
Si Z no es múltiplo del MCD, es imposible medir Z galones con las jarras.

Asegurarse de que Z sea menor o igual a la capacidad máxima de las jarras:
Si Z es mayor que la capacidad de ambas jarras, es imposible medir Z galones.

Simulación del proceso:
Llenar y vaciar las jarras en una secuencia de pasos hasta que una de las jarras contenga exactamente Z galones.

El algoritmo utiliza un enfoque iterativo para llenar y transferir agua entre las jarras, registrando cada paso hasta alcanzar la cantidad deseada o determinar que no es posible.

