using System;

class URI
{

  static void Main(string[] args)
  {

    double PI, raio, area;

    PI = 3.14159;
    raio = Convert.ToDouble(Console.ReadLine());

    area = PI * Math.Pow(raio, 2);

    Console.WriteLine($"A={area:F4}");

  }

}