using Enterprise.Shopping.API.Data;
using Enterprise.Shopping.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Enterprise.Shopping.API.Controllers;

public class ProductsController : BaseApiController
{
    private readonly StoreContext _context;

    public ProductsController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
        return _context.Products.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
        return _context.Products.Find(id);
    }
}
