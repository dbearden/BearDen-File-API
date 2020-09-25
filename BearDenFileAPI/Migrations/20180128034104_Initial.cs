using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace BearDenFileAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FileId = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                });

            migrationBuilder.CreateTable(
                name: "FilesContent",
                columns: table => new
                {
                    FileId = table.Column<Guid>(nullable: false),
                    Content = table.Column<byte[]>(nullable: true),
                    ContentType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilesContent", x => x.FileId);
                });

            migrationBuilder.CreateTable(
                name: "FilesInfo",
                columns: table => new
                {
                    FileId = table.Column<Guid>(nullable: false),
                    Filename = table.Column<string>(nullable: true),
                    Modified = table.Column<DateTime>(nullable: false),
                    Owner = table.Column<string>(nullable: true),
                    Size = table.Column<long>(nullable: false),
                    Uploaded = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilesInfo", x => x.FileId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "FilesContent");

            migrationBuilder.DropTable(
                name: "FilesInfo");
        }
    }
}
