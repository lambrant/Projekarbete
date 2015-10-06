<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>User-info</title>
    </head>
    <body>
        
        <h3>User Info</h3>
        <ul>
            <li>
                First name: <?php echo htmlspecialchars($_POST["firstName"]); ?>
            </li>
            <li>
                Last name: <?php echo htmlspecialchars($_POST["lastName"]); ?>
            </li>
            <li>
                E-mail: <?php echo htmlspecialchars($_POST["email"]); ?>
            </li>
        </ul>
        
    </body>
    
</html>