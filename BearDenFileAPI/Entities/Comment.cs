using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BearDenFileAPI
{
    public class Comment
    {
        public string Text { get; set; }
        public int FileId { get; set; }
        public int CommentId { get; set; }
    }
}
