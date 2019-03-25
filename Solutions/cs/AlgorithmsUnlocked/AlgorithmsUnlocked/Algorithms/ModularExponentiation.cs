using System;

namespace AlgorithmsUnlocked.Algorithms
{
    public class ModularExponentiation
    {
        public static int Run(int x, int d, int n)
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
                    var z = Run(x, d / 2, n);
                    result = (z * z) % n;
                }
                else
                {
                    var z = Run(x, (d - 1) / 2, n);
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
