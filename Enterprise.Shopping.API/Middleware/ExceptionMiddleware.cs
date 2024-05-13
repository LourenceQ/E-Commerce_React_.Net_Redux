using Microsoft.AspNetCore.Mvc;

namespace Enterprise.Shopping.API.Middleware;

/// <summary> </summary>
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly IHostEnvironment _env;
    private readonly ILogger<ExceptionMiddleware> _logger;
    
    /// <summary>Construtor padrão </summary>
    /// <param name="next"></param>
    /// <param name="logger"></param>
    /// <param name="env"></param>
    public ExceptionMiddleware(RequestDelegate next
        , ILogger<ExceptionMiddleware> logger
        , IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 500;

            ProblemDetails response = new()
            {

            };
        }   
    }
}