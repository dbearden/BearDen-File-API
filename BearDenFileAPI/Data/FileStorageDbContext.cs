using Microsoft.EntityFrameworkCore;

namespace BearDenFileAPI
{
    public class FileStorageDbContext : DbContext
    {
        public DbSet<UserFileInfo> FilesInfo { get; set; }
        public DbSet<UserFileContent> FilesContent { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public FileStorageDbContext(DbContextOptions<FileStorageDbContext> options)
            : base(options)
        { }
    }
}
