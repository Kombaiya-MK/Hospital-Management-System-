using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserAPI.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Details_Details_Doctor_UserDetailsEmail",
                table: "Details");

            migrationBuilder.DropForeignKey(
                name: "FK_Details_Details_UserDetailsEmail",
                table: "Details");

            migrationBuilder.DropForeignKey(
                name: "FK_Details_Users_Email",
                table: "Details");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Details",
                table: "Details");

            migrationBuilder.DropIndex(
                name: "IX_Details_Doctor_UserDetailsEmail",
                table: "Details");

            migrationBuilder.DropIndex(
                name: "IX_Details_UserDetailsEmail",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "AccountStatus",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "Doctor_UserDetailsEmail",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "EmergencyName",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "EmergencyPhoneNumber",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "Experience",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "Specialization",
                table: "Details");

            migrationBuilder.DropColumn(
                name: "UserDetailsEmail",
                table: "Details");

            migrationBuilder.RenameTable(
                name: "Details",
                newName: "UserDetails");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDetails",
                table: "UserDetails",
                column: "Email");

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Marital_Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StreetAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    DateofBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    AccountStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Specialization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Experience = table.Column<int>(type: "int", nullable: false),
                    UserDetailsEmail = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Email);
                    table.ForeignKey(
                        name: "FK_Doctors_UserDetails_UserDetailsEmail",
                        column: x => x.UserDetailsEmail,
                        principalTable: "UserDetails",
                        principalColumn: "Email");
                    table.ForeignKey(
                        name: "FK_Doctors_Users_Email",
                        column: x => x.Email,
                        principalTable: "Users",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Marital_Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StreetAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    DateofBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    EmergencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmergencyPhoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    UserDetailsEmail = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Email);
                    table.ForeignKey(
                        name: "FK_Patients_UserDetails_UserDetailsEmail",
                        column: x => x.UserDetailsEmail,
                        principalTable: "UserDetails",
                        principalColumn: "Email");
                    table.ForeignKey(
                        name: "FK_Patients_Users_Email",
                        column: x => x.Email,
                        principalTable: "Users",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_UserDetailsEmail",
                table: "Doctors",
                column: "UserDetailsEmail");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_UserDetailsEmail",
                table: "Patients",
                column: "UserDetailsEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_UserDetails_Users_Email",
                table: "UserDetails",
                column: "Email",
                principalTable: "Users",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserDetails_Users_Email",
                table: "UserDetails");

            migrationBuilder.DropTable(
                name: "Doctors");

            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDetails",
                table: "UserDetails");

            migrationBuilder.RenameTable(
                name: "UserDetails",
                newName: "Details");

            migrationBuilder.AddColumn<string>(
                name: "AccountStatus",
                table: "Details",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Details",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Doctor_UserDetailsEmail",
                table: "Details",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmergencyName",
                table: "Details",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmergencyPhoneNumber",
                table: "Details",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Experience",
                table: "Details",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Specialization",
                table: "Details",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserDetailsEmail",
                table: "Details",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Details",
                table: "Details",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_Details_Doctor_UserDetailsEmail",
                table: "Details",
                column: "Doctor_UserDetailsEmail");

            migrationBuilder.CreateIndex(
                name: "IX_Details_UserDetailsEmail",
                table: "Details",
                column: "UserDetailsEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_Details_Details_Doctor_UserDetailsEmail",
                table: "Details",
                column: "Doctor_UserDetailsEmail",
                principalTable: "Details",
                principalColumn: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_Details_Details_UserDetailsEmail",
                table: "Details",
                column: "UserDetailsEmail",
                principalTable: "Details",
                principalColumn: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_Details_Users_Email",
                table: "Details",
                column: "Email",
                principalTable: "Users",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
