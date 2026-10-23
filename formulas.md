/*# Bitácora de Análisis y Deducción de Fórmulas de Conversión*\

/*Este documento detalla el análisis matemático y físico utilizado para implementar los algoritmos de conversión de temperatura en JavaScript.*\

/*---*\

/*## 1. Escala Celsius (°C) a Kelvin (K)*\

/*### Fundamento Físico:*\
/** El cero absoluto es el punto térmico más bajo posible en el universo (ausencia de energía cinética molecular), ubicado exactamente a **-273.15 °C**.*\
/** La escala Kelvin comparte la misma magnitud en sus incrementos que la escala Celsius (un aumento de 1 °C equivale a un aumento de 1 K).*\

/*### Deducción Matemática:*\
/*$$K = °C - (-273.15)$$*\
/*$$K = °C + 273.15$$*\

/** **Algoritmo aplicado:***\
/*  $$\text{kelvin} = \text{celsius} + 273.15$$*\

/*---*\

/*## 2. Escala Celsius (°C) a Fahrenheit (°F)*\

/*### Puntos de Referencia:*\
/** **Punto de congelación del agua:** $0\text{ }°\text{C} = 32\text{ }°\text{F}$*\
/** **Punto de ebullición del agua:** $100\text{ }°\text{C} = 212\text{ }°\text{F}$*\

/*### Deducción de la Proporción (Pendiente):*\
/*1. La variación en Celsius es de $100 - 0 = 100$ grados.*\
/*2. La variación en Fahrenheit es de $212 - 32 = 180$ grados.*\
/*3. Razón de cambio:*\
/*   $$\frac{\Delta °F}{\Delta °C} = \frac{180}{100} = \frac{9}{5} = 1.8$$*\

/*### Deducción de la Fórmula:*\
/*Cada grado Celsius equivale a $1.8$ grados Fahrenheit a partir del punto de congelación ($32\text{ }°F$):*\
/*$$°F = (°C \times 1.8) + 32$$*\

/** **Algoritmo aplicado:***\
/*  $$\text{fahrenheit} = (\text{celsius} \times 1.8) + 32$$*\