using System;
using AlgorithmsUnlocked.Algorithms;

namespace AlgorithmsUnlocked
{
    public class MainClass
    {
        public static void Main(string[] args)
        {
            TextLZWCompressor();
            Console.ReadKey();
        }

        public static void TestEuclid()
        {
            var resultEuclid = Euclid.Run(21, 9);
            foreach (var item in resultEuclid)
            {
                Console.WriteLine(item.ToString());
            }
        }

        public static void TestModularExponentiation()
        {
            var resultModularExponentiation = ModularExponentiation.Run(7, 560, 561);
            Console.WriteLine(resultModularExponentiation);
        }

        public static void TextLZWCompressor()
        {
            var compressed = LZW.Compressor("TATAGATCTTAATATA");
            var decompressed = LZW.Decompressor(compressed);
            Console.WriteLine(decompressed);
        }
    }
}
