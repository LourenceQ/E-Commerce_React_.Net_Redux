
using Microsoft.AspNetCore.Mvc;

namespace Enterprise.Shopping.API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ProblemDetails() { Title = "Bad request" });
    }

    [HttpGet("unauthorized")]
    public ActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "Error");
        ModelState.AddModelError("Problem1", "Error");

        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
        throw new Exception("Server error");
    }



}