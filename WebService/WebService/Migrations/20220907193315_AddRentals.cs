using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebService.Migrations
{
    public partial class AddRentals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("5e8164a1-1193-43fb-8cf1-592dfa989b18"));

            migrationBuilder.CreateTable(
                name: "Rental",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    StartTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EndTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Distance = table.Column<double>(type: "REAL", nullable: false),
                    IsCompleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rental", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rental_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccountBalance", "CreatedDate", "Email", "IsActive", "Password", "Role", "Username" },
                values: new object[] { new Guid("6801fe15-4ce3-45d4-8c89-eb352e2c52c5"), 0m, new DateTime(2022, 9, 7, 21, 33, 15, 693, DateTimeKind.Local).AddTicks(5716), "admin.wypozyczalnia@gmail.com", false, "admin123", "admin", "Admin" });

            migrationBuilder.CreateIndex(
                name: "IX_Rental_UserId",
                table: "Rental",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rental");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("6801fe15-4ce3-45d4-8c89-eb352e2c52c5"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AccountBalance", "CreatedDate", "Email", "IsActive", "Password", "Role", "Username" },
                values: new object[] { new Guid("5e8164a1-1193-43fb-8cf1-592dfa989b18"), 0m, new DateTime(2022, 9, 5, 22, 42, 12, 819, DateTimeKind.Local).AddTicks(3235), "admin.wypozyczalnia@gmail.com", false, "admin123", "admin", "Admin" });
        }
    }
}
