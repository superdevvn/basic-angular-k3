namespace SuperDev.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init003 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Unit", "Code", c => c.String(maxLength: 50));
            AddColumn("dbo.Warehouse", "ManagerId", c => c.Int(nullable: false));
            AddColumn("dbo.Warehouse", "Phone", c => c.String());
            AlterColumn("dbo.Manufacturer", "Code", c => c.String(maxLength: 15));
            CreateIndex("dbo.Manufacturer", "Code", unique: true);
            CreateIndex("dbo.Unit", "Code", unique: true);
            CreateIndex("dbo.Warehouse", "ManagerId");
            AddForeignKey("dbo.Warehouse", "ManagerId", "dbo.User", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Warehouse", "ManagerId", "dbo.User");
            DropIndex("dbo.Warehouse", new[] { "ManagerId" });
            DropIndex("dbo.Unit", new[] { "Code" });
            DropIndex("dbo.Manufacturer", new[] { "Code" });
            AlterColumn("dbo.Manufacturer", "Code", c => c.String());
            DropColumn("dbo.Warehouse", "Phone");
            DropColumn("dbo.Warehouse", "ManagerId");
            DropColumn("dbo.Unit", "Code");
        }
    }
}
