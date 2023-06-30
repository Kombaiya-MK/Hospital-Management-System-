using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    HashKey = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    DoctorFirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DoctorLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DoctorGender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorPhone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    DoctorMaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorStreetAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorState = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorPostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorStatus = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    DoctorDateofBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DoctorAge = table.Column<int>(type: "int", nullable: false),
                    DoctorAccountStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorSpecialization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorExperience = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Email);
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
                    PatientFirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PatientLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PatientGender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientPhone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    PatientMaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientStreetAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientState = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientPostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientStatus = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    PatientDateofBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PatientAge = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Email);
                    table.ForeignKey(
                        name: "FK_Patients_Users_Email",
                        column: x => x.Email,
                        principalTable: "Users",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Doctors");

            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
