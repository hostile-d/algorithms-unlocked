﻿using System.Collections.Generic;
using System.Text;

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
        public static string Decompressor(List<int> indices)
        {
            var dictionary = new Dictionary<int, string>();
            for (var i = 0; i < 256; i++)
            {
                dictionary.Add(i, ((char)i).ToString());
            }

            var current = dictionary[indices[0]];
            indices.RemoveAt(0);
            var decompressed = new StringBuilder(current);

            foreach (var k in indices)
            {
                string entry = null;
                if (dictionary.ContainsKey(k))
                    entry = dictionary[k];
                else if (k == dictionary.Count)
                    entry = current + current[0];

                decompressed.Append(entry);

                dictionary.Add(dictionary.Count, current + entry[0]);

                current = entry;
            }

            return decompressed.ToString();
        }
    }
}
