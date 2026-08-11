<!DOCTYPE html>

<html>
    <head>
        <title>Authenticate</title>
        <link rel="stylesheet" href="css/style.css?v=2">
        <link rel="stylesheet" href="css/creates.css?v=2">
        <link rel="stylesheet" href="css/authenticate.css?v=2">
        <script src="js/authenticate.js"></script>
    </head>
    <body class="auth-margin">
        <form id="authForm" action="" method="post" enctype="multipart/form-data">
            <div class="auth-textbox">
                <h2 class="green medium">Authentication Form</h2>
                <p class="modified-letter-spacing">Attempt OTP to upload</p>
            </div>
            <div class="form-group full-width">
                <label for="email-input">Enter your Email</label>
                <input type="email" id="email-input" name="email-input" placeholder="Enter your email">
                <div class="auth-error" id="emailError"></div>
            </div>
            <div class="form-group full-width">
                <label for="auth-code">Enter the code</label>
                <input type="text" id="auth-code" name="auth-code" placeholder="Enter the code" required>
                <div class="auth-error" id="otpError"></div>
            </div>
            <div class="form-actions" style="padding-top: 0;">
                <button id="generateCodeBtn">Generate Code</button>
                <button type="submit" class="verifyBtn" id="verifyBtn">Verify</button>
            </div>
            <!-- <div id="statusMessage" class="auth-error" style="text-align: center;font-size: 0.9em;">Test</div> -->
            <div class="auth-small-textbox">
                <a href="#">Go Back</a>
            </div>
            <div class="auth-error" id="authMessage" style="text-align:center;"></div>
        </form>
    </body>
</html>
