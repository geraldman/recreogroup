document.addEventListener('DOMContentLoaded',  () => {
    const generateCodeBtn = document.getElementById('generateCodeBtn');
    const emailInput = document.getElementById('email-input');
    const otpInput = document.getElementById('auth-code');
    const verifyBtn = document.getElementById('verifyBtn');
    const emailMessage = document.getElementById('emailError');
    const otpMessage = document.getElementById('otpError');
    const authMessage = document.getElementById('authMessage');
    const authForm = document.getElementById('authForm');

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const checkFormValidity = () => {
        const email = emailInput.value.trim();
        const otp  = otpInput.value.trim();

        if(email && isValidEmail(email)){
            generateCodeBtn.disabled = false;
        }
        else{
            generateCodeBtn.disabled = true;
        }

        if(email && isValidEmail(email) && otp && otp.length === 6){
            verifyBtn.disabled = false;
        }
        else{
            verifyBtn.disabled = true;
        }

        if(emailMessage.textContent && email) emailMessage.textContent = '';
        if(otpMessage.textContent && otp) otpMessage.textContent = '';
    };

    emailInput.addEventListener('input', checkFormValidity);
    otpInput.addEventListener('input', checkFormValidity);


    // AJAX for generate code button
    generateCodeBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim();

        authMessage.textContent = '';
        authMessage.style.color = '';
        emailMessage.textContent = '';
        otpMessage.textContent = '';

        if(!email){
            emailMessage.textContent = 'Email address cannot be empty';
            return;
        }
        if(!isValidEmail(email)){
            emailMessage.textContent = 'Please enter a valid email address.'
            return;
        }

        generateCodeBtn.disabled = true;
        generateCodeBtn.textContent = 'Sending...';
        authMessage.textContent = 'Sending OTP...';
        authMessage.style.color = 'gray';

        const formData = new FormData();
        formData.append('email', email);

        try{
            const response = await fetch('../send_otp_email.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if(data.success){
                generateCodeBtn.dataset.cooldown = 'true';
                authMessage.textContent = data.message;
                authMessage.style.color = 'green';
                otpInput.focus();

                let countdown = 60;
                generateCodeBtn.textContent = `Wait ${countdown}s`;
 
                const interval = setInterval(() => {
                    countdown--;
                    if(countdown > 0){
                        generateCodeBtn.textContent = `Wait ${countdown}s`;
                        generateCodeBtn.disabled = true;
                    }
                    else{
                        generateCodeBtn.disabled = false;
                        generateCodeBtn.dataset.cooldown = 'false'; // Reset cooldown state
                        generateCodeBtn.textContent = 'Generate Code';
                        checkFormValidity(); // Re-check validity to enable if email is still valid
                        authMessage.textContent = 'You can request a new OTP now.';
                        authMessage.style.color = 'gray';
                    }
                }, 1000);
            }
            else{
                authMessage.textContent = data.message;
                authMessage.style.color = 'red';
            }
        }
        catch(error){
            console.error('Error sending email: ', error);
            authMessage.textContent = 'Network error. Could not send OTP.';
            authMessage.style.color = 'red';
        }
        finally{
            generateCodeBtn.disabled = false;
            generateCodeBtn.textContent = 'Generate Code';
        }
    });

    authForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const otp = otpInput.value.trim();

        authMessage.textContent = '';
        authMessage.style.color = '';
        emailMessage.textContent = '';
        otpMessage.textContent = '';

        if(!email || !isValidEmail(email)){
            emailMessage.textContent = 'Please enter a valid email.';
            checkFormValidity();
            return;
        }
        if(!isValidEmail(email)){
            emailMessage.textContent = 'Please enter a 6-digit OTP';
            checkFormValidity();
            return;
        }

        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Verifying...';
        authMessage.textContent = 'Verifying OTP...';
        authMessage.style.color = 'gray';

        const formData = new formData();
        formData.append('email', email);
        formData.append('otp', otp);

        try{
            const response = await fetch('../check_otp.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if(data.success){
                authMessage.textContent = data.message;
                authMessage.style.color = 'green';
                window.location.href = 'index.php?status=success'; // example redirecting
            }
            else{
                authMessage.textContent = data.message;
                authMessage.textContent = 'red';
            }
        }
        catch(error){
            console.error('Error verifying OTP: ', error);
            authMessage.textContent = 'Network error. Could not verify OTP.';
            authMessage.style.color = 'red';
        }
        finally{
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Verify';
        }
    });
    
    checkFormValidity();
}); 