namespace SuperDev.Models.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init002 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Product", "Code", c => c.String(maxLength: 50));
            AlterColumn("dbo.User", "Username", c => c.String(maxLength: 50));
            CreateIndex("dbo.Product", "Code", unique: true);
            CreateIndex("dbo.User", "Username", unique: true, name: "IX_UserName");
        }
        
        public override void Down()
        {
            DropIndex("dbo.User", "IX_UserName");
            DropIndex("dbo.Product", new[] { "Code" });
            AlterColumn("dbo.User", "Username", c => c.String());
            AlterColumn("dbo.Product", "Code", c => c.String());
        }
    }
}
