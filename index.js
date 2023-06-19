function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Dear ${names[i]}, congratulations on ${eventName}! Best wishes.`;
      messages.push(message);
    }
  
    return messages;
  }
  