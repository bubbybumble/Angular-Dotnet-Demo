using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FRSSoftwareDemoApp.Models
{
    public class Subject
    {
        [Key]
        public int RecId { get; set; }

        public DateOnly DateOfBirth { get; set; }

        [Column(TypeName ="varchar(100)")]
        public string? FirstName { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? MiddleName { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? LastName { get; set; }

        [Column(TypeName = "varchar(2)")]
        public string? StateOfResidence { get; set; }
    }
}
