using System.Collections.Generic;

namespace AlgorithmsUnlocked.Algorithms
{
    public class LZW
    {
        public static List<int> Compressor(string uncompressed)
        {
            var dictionary = new Dictionary<string, int>();
            for (var i = 0; i < 256; i++)
                dictionary.Add(((char)i).ToString(), i);

            var s = string.Empty;
            var compressed = new List<int>();

            foreach (var c in uncompressed)
            {
                var sc = s + c;
                if (dictionary.ContainsKey(sc))
                {
                    s = sc;
                }
                else
                {
                    compressed.Add(dictionary[s]);
                    dictionary.Add(sc, dictionary.Count);
                    s = c.ToString();
                }
            }

            if (!string.IsNullOrEmpty(s))
                compressed.Add(dictionary[s]);

            return compressed;
        }
    }
}
