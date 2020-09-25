using System;
using System.Collections.Generic;
using System.IO;

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web;


namespace BearDenFileAPI
{
    [Route("api/[controller]")]
    public class FilesController : Controller
    {
        List<UserFileInfo> _files;
        List<UserFileContent> _fileContents;
        FileStorageDbContext _dbContext;



        public FilesController(/*FileStorageDbContext dbContext*/)
        {
            //_dbContext = dbContext;
        
            //_files = _dbContext.FilesInfo.ToList();
                
            var file1 = new FileInfo("./bear-den-file-api/src/app/app.component.html");
            var file2 = new FileInfo("./bear-den-file-api/src/app/file-list.component.html");
            _files = new List<UserFileInfo>{
               new UserFileInfo(){
                   Filename = file1.Name,
                   FileId = Guid.NewGuid(),
                   Uploaded = DateTime.Now,
                   Modified = DateTime.Now,
                   Size = file1.Length,
                   Owner = "owner1"
               },
               new UserFileInfo{
                   Filename = file2.Name,
                   FileId = Guid.NewGuid(),
                   Uploaded = DateTime.Now,
                   Modified = DateTime.Now,
                   Size = file2.Length,
                   Owner = "owner2"

               }

            
           };          
            var fileA = _files[0];
            var fileB = _files[1];
_fileContents = new List<UserFileContent>(){
                new UserFileContent(){
                    Content = System.IO.File.ReadAllBytes("./bear-den-file-api/src/app/app.component.html"),
                    ContentType = "text/HTML",
                    FileId = fileA.FileId
                },
                new UserFileContent(){
                    Content = System.IO.File.ReadAllBytes("./bear-den-file-api/src/app/file-list.component.html"),
                    ContentType = "text/HTML",
                    FileId = fileB.FileId
                }
            };

        }
        // GET api/values
        [HttpGet]
        public JsonResult Get()
        {
            //_files = _dbContext.FilesInfo.ToList();
            var result = new JsonResult(_files);
            return result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public JsonResult Get(Guid id)
        {
            return new JsonResult(_files.FirstOrDefault(file => file.FileId==id));
        }

        [Route("Download/{id}")]
        [HttpGet]
        public FileResult Download(Guid id)
        {
            //var fileComponents = _dbContext.FilesContent.FirstOrDefault(fileContent => fileContent.FileId == id);
            var fileComponents = _fileContents.FirstOrDefault(fileContent => fileContent.FileId == id);
            byte[] file = fileComponents.Content;
            string contentType = fileComponents.ContentType;
            return File(file, contentType);
        }

        // POST api/values
        [HttpPost("{name}")]
        public async void Post(string name)
        {
            var fileContent = new UserFileContent();
            var fileInfo = new UserFileInfo();

            var body = new MemoryStream();
            await Request.Body.CopyToAsync(body);

            fileContent.Content = body.ToArray();

            fileContent.ContentType = Request.ContentType;
            fileContent.FileId = Guid.NewGuid();

            fileInfo.FileId = fileContent.FileId;
            fileInfo.Filename = name;
            fileInfo.Modified = DateTime.Now;
            fileInfo.Size = Request.ContentLength.GetValueOrDefault();
            fileInfo.Uploaded = DateTime.Now;
            fileInfo.Owner = "owner";

            /*_dbContext.Add(fileInfo);
            _dbContext.Add(fileContent);
            _dbContext.SaveChanges();*/

            _files.Add(fileInfo);
            _fileContents.Add(fileContent);
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            /*var fileInfo = _dbContext.Find<UserFileInfo>(id);
            var fileContents = _dbContext.Find<UserFileContent>(id);
             _dbContext.Remove(fileInfo);
            _dbContext.Remove(fileContents);
            _dbContext.SaveChanges();*/
            
            var fileInfo = _files.FirstOrDefault(file => file.FileId == id);
            var fileContents = _fileContents.FirstOrDefault(file => file.FileId == id);
            _files.Remove(fileInfo);
            _fileContents.Remove(fileContents);
        }
    }
}
