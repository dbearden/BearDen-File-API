﻿// <auto-generated />
using BearDenFileAPI;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace BearDenFileAPI.Migrations
{
    [DbContext(typeof(FileStorageDbContext))]
    partial class FileStorageDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BearDenFileAPI.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("FileId");

                    b.Property<string>("Text");

                    b.HasKey("CommentId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("BearDenFileAPI.UserFileContent", b =>
                {
                    b.Property<Guid>("FileId")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("Content");

                    b.Property<string>("ContentType");

                    b.HasKey("FileId");

                    b.ToTable("FilesContent");
                });

            modelBuilder.Entity("BearDenFileAPI.UserFileInfo", b =>
                {
                    b.Property<Guid>("FileId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Filename");

                    b.Property<DateTime>("Modified");

                    b.Property<string>("Owner");

                    b.Property<long>("Size");

                    b.Property<DateTime>("Uploaded");

                    b.HasKey("FileId");

                    b.ToTable("FilesInfo");
                });
#pragma warning restore 612, 618
        }
    }
}
