using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserAPI.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserDetails_UserDetails_Doctor_UserDetailsEmail",
                table: "UserDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_UserDetails_UserDetails_UserDetailsEmail",
                table: "UserDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_UserDetails_Users_Email",
                table: "UserDetails");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDetails",
                table: "UserDetails");

            migrationBuilder.RenameTable(
                name: "UserDetails",
                newName: "Details");

            migrationBuilder.RenameIndex(
                name: "IX_UserDetails_UserDetailsEmail",
                table: "Details",
                newName: "IX_Details_UserDetailsEmail");

            migrationBuilder.RenameIndex(
                name: "IX_UserDetails_Doctor_UserDetailsEmail",
                table: "Details",
                newName: "IX_Details_Doctor_UserDetailsEmail");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Details",
                table: "Details",
                column: "Email");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameTable(
                name: "Details",
                newName: "UserDetails");

            migrationBuilder.RenameIndex(
                name: "IX_Details_UserDetailsEmail",
                table: "UserDetails",
                newName: "IX_UserDetails_UserDetailsEmail");

            migrationBuilder.RenameIndex(
                name: "IX_Details_Doctor_UserDetailsEmail",
                table: "UserDetails",
                newName: "IX_UserDetails_Doctor_UserDetailsEmail");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDetails",
                table: "UserDetails",
                column: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_UserDetails_UserDetails_Doctor_UserDetailsEmail",
                table: "UserDetails",
                column: "Doctor_UserDetailsEmail",
                principalTable: "UserDetails",
                principalColumn: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_UserDetails_UserDetails_UserDetailsEmail",
                table: "UserDetails",
                column: "UserDetailsEmail",
                principalTable: "UserDetails",
                principalColumn: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_UserDetails_Users_Email",
                table: "UserDetails",
                column: "Email",
                principalTable: "Users",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
