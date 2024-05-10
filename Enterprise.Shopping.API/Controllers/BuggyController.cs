
using Microsoft.AspNetCore.Mvc;

namespace Enterprise.Shopping.API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }
    
    [HttpGet]
    public ActionResult GetBadRequest()
    {
        return BadRequest();
    }
    
    [HttpGet]
    public ActionResult GetUnauthorized()
    {
        return Unauthorized();
    }
    
    [HttpGet]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "Error");
        ModelState.AddModelError("Problem1", "Error");

        return ValidationProblem();
    }
    
    [HttpGet]
    public ActionResult GetServerError()
    {
        throw new Exception("Server error");
    }



}