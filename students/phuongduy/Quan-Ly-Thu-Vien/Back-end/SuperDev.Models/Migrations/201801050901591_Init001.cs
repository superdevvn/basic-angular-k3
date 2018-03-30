namespace SuperDev.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init001 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Book",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CategoryId = c.Int(nullable: false),
                        Code = c.String(maxLength: 20),
                        Name = c.String(),
                        Description = c.String(),
                        IsActived = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Category", t => t.CategoryId)
                .Index(t => t.CategoryId)
                .Index(t => t.Code, unique: true);
            
            CreateTable(
                "dbo.Category",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Customer",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(maxLength: 20),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Code, unique: true);
            
            CreateTable(
                "dbo.InOut",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        CustomerId = c.Int(nullable: false),
                        BookId = c.Int(nullable: false),
                        FromDate = c.DateTime(nullable: false),
                        ToDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Book", t => t.BookId)
                .ForeignKey("dbo.Customer", t => t.CustomerId)
                .ForeignKey("dbo.User", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.CustomerId)
                .Index(t => t.BookId);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoleId = c.Int(nullable: false),
                        Username = c.String(maxLength: 50),
                        Password = c.String(),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Description = c.String(),
                        IsActived = c.Boolean(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Role", t => t.RoleId)
                .Index(t => t.RoleId)
                .Index(t => t.Username, unique: true, name: "IX_UserName");
            
            CreateTable(
                "dbo.Role",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Indemnify",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        CustomerId = c.Int(nullable: false),
                        BookId = c.Int(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Book", t => t.BookId)
                .ForeignKey("dbo.Customer", t => t.CustomerId)
                .ForeignKey("dbo.User", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.CustomerId)
                .Index(t => t.BookId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Indemnify", "UserId", "dbo.User");
            DropForeignKey("dbo.Indemnify", "CustomerId", "dbo.Customer");
            DropForeignKey("dbo.Indemnify", "BookId", "dbo.Book");
            DropForeignKey("dbo.InOut", "UserId", "dbo.User");
            DropForeignKey("dbo.User", "RoleId", "dbo.Role");
            DropForeignKey("dbo.InOut", "CustomerId", "dbo.Customer");
            DropForeignKey("dbo.InOut", "BookId", "dbo.Book");
            DropForeignKey("dbo.Book", "CategoryId", "dbo.Category");
            DropIndex("dbo.Indemnify", new[] { "BookId" });
            DropIndex("dbo.Indemnify", new[] { "CustomerId" });
            DropIndex("dbo.Indemnify", new[] { "UserId" });
            DropIndex("dbo.User", "IX_UserName");
            DropIndex("dbo.User", new[] { "RoleId" });
            DropIndex("dbo.InOut", new[] { "BookId" });
            DropIndex("dbo.InOut", new[] { "CustomerId" });
            DropIndex("dbo.InOut", new[] { "UserId" });
            DropIndex("dbo.Customer", new[] { "Code" });
            DropIndex("dbo.Book", new[] { "Code" });
            DropIndex("dbo.Book", new[] { "CategoryId" });
            DropTable("dbo.Indemnify");
            DropTable("dbo.Role");
            DropTable("dbo.User");
            DropTable("dbo.InOut");
            DropTable("dbo.Customer");
            DropTable("dbo.Category");
            DropTable("dbo.Book");
        }
    }
}
