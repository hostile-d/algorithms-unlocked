using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsUnlocked.Algorithms
{
    class Euclid
    {
        public static int[] Run(int a, int b)
        {
            int[] result;
            if (b == 0)
            {
                result = new[] { a, 1, 0 };
            }
            else
            {
                var rec = Run(b, a % b);
                var g = rec[0];
                var i = rec[1];
                var j = rec[2] - (a / b) * rec[2];
                result = new[] { g, i, j };
            }
            return result;
        }
    }
}
