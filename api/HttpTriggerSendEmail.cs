using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;

namespace Company.Function
{
    public static class HttpTriggerSendEmail
    {
        [FunctionName("HttpTriggerSendEmail")]
        [return: SendGrid(ApiKey = "trustByggSendGridKey")]
        public static async Task<SendGridMessage> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];
            string email = req.Query["email"];
            string message = req.Query["message"];

            string requestBody = String.Empty;
            using (StreamReader streamReader =  new  StreamReader(req.Body))
            {
                requestBody = await streamReader.ReadToEndAsync();
            }
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;
            email = email ?? data?.email;
            message = message ?? data?.message;
                
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("info@trustbygg.se", "TrustBygg.se"),
                Subject = "Kostnadsförslag från " + name,
                PlainTextContent = "from: " + email + "message: " + message,
                HtmlContent = "<html><body><div>from: " + email + "</div><div>message: " + message + "</div></body></html>"
            };
            msg.AddTo(new EmailAddress("christopherguven97@gmail.com", "chris"));

            req.HttpContext.Response.Headers.Add("Content-Type", "123123");

            return msg;
            
        }
    }
}
