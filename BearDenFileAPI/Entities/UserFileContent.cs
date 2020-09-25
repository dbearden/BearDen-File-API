using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BearDenFileAPI
{
    public class UserFileContent
    {
        public byte[] Content { get; set; }
        public string ContentType { get; set; }

        [Key]
        public Guid FileId { get; set; }
    }
}
