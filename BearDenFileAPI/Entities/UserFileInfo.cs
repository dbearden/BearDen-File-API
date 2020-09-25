using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BearDenFileAPI
{
    public class UserFileInfo
    {
        public string Filename { get; set; }
        public long Size { get; set; }
        public DateTime Uploaded { get; set; }
        public DateTime Modified { get; set; }
        
        public string Owner { get; set; }

        [Key]
        public Guid FileId { get; set; }
    }
}
