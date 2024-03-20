using Enterprise.Shopping.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Enterprise.Shopping.API.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Product> Products => Set<Product>();
}
