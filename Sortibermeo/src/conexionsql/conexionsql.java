/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package conexionsql;



import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import javax.swing.JOptionPane;




/**
 *
 * @author russther
 */
public class conexionsql {
    
    Connection conectar=null;
    public Connection conexion(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
             conectar=(Connection) DriverManager.getConnection("jdbc:mysql://147.135.71.233/sorticom_jbermeo","sorticom_jbermeo","fgZ4eGEKqK1S");
             
             
             JOptionPane.showMessageDialog(null, "conexion exitosa");
             
            
        } catch (Exception e) {
            
             JOptionPane.showMessageDialog(null, "eror de conexion "+e.getMessage());
        }
        return conectar;

    
   }
   

}

       
    

