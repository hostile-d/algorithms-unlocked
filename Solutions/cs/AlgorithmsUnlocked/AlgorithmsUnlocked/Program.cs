using System;

namespace AlgorithmsUnlocked
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            //var resultEuclid = Euclid(21, 9);
            //foreach (var item in resultEuclid)
            //{
            //    Console.WriteLine(item.ToString());
            //}
            var resultModularExponentiation = ModularExponentiation(7,560,561);
            Console.WriteLine(resultModularExponentiation);

        }
        public static int[] Euclid(int a, int b)
        {
            int[] result;
            if (b == 0)
            {
                result = new[] { a, 1, 0 };
            }
            else
            {
                var rec = Euclid(b, a % b);
                var g = rec[0];
                var i = rec[1];
                var j = rec[2] - (a / b) * rec[2];
                result = new[] { g, i, j };
            }
            return result;
        }
        public static int ModularExponentiation(int x, int d, int n)
        {
            int result;
            if (d == 0)
            {
                result = 1;
            }
            else if (d > 0)
            {
                if (d % 2 == 0)
                {
                    var z = ModularExponentiation(x, d / 2, n);
                    result = (z * z) % n;
                }
                else
                {
                    var z = ModularExponentiation(x, (d - 1) / 2, n);
                    result = (z * z * x) % n;
                }
            }
            else
            {
                throw new ArgumentOutOfRangeException();
            }
            return result;
        }
    }
}
