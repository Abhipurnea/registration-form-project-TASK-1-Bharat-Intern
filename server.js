app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        // User already exists
        res.send('Already registered');
      } else {
        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send('Registration successful');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });
  