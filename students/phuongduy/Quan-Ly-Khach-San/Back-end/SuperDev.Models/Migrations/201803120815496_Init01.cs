namespace SuperDev.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init01 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.InOutLine",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InOutId = c.Int(nullable: false),
                        Name = c.String(),
                        Cost = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.InOut", t => t.InOutId)
                .Index(t => t.InOutId);
            
            CreateTable(
                "dbo.InOut",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoomId = c.Int(nullable: false),
                        CustomerName = c.String(maxLength: 50),
                        CMND = c.String(maxLength: 50),
                        FromDate = c.DateTime(nullable: false),
                        ToDate = c.DateTime(),
                        TotalCost = c.Decimal(precision: 18, scale: 2),
                        Description = c.String(maxLength: 1000),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Room", t => t.RoomId)
                .Index(t => t.RoomId);
            
            CreateTable(
                "dbo.Room",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(maxLength: 15),
                        Name = c.String(maxLength: 50),
                        Size = c.String(maxLength: 15),
                        Type = c.String(maxLength: 15),
                        PricePerHour = c.Decimal(nullable: false, precision: 18, scale: 2),
                        PricePerDay = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Code, unique: true);
            
            CreateTable(
                "dbo.Role",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 50),
                        Description = c.String(maxLength: 1000),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoleId = c.Int(nullable: false),
                        Username = c.String(maxLength: 50),
                        Password = c.String(maxLength: 50),
                        FirstName = c.String(maxLength: 50),
                        LastName = c.String(maxLength: 50),
                        Description = c.String(maxLength: 1000),
                        IsActived = c.Boolean(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Role", t => t.RoleId)
                .Index(t => t.RoleId)
                .Index(t => t.Username, unique: true);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.User", "RoleId", "dbo.Role");
            DropForeignKey("dbo.InOut", "RoomId", "dbo.Room");
            DropForeignKey("dbo.InOutLine", "InOutId", "dbo.InOut");
            DropIndex("dbo.User", new[] { "Username" });
            DropIndex("dbo.User", new[] { "RoleId" });
            DropIndex("dbo.Room", new[] { "Code" });
            DropIndex("dbo.InOut", new[] { "RoomId" });
            DropIndex("dbo.InOutLine", new[] { "InOutId" });
            DropTable("dbo.User");
            DropTable("dbo.Role");
            DropTable("dbo.Room");
            DropTable("dbo.InOut");
            DropTable("dbo.InOutLine");
        }
    }
}
