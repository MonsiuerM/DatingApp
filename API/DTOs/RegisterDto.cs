using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        //max length = 8, min length = 4
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}