import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, TextField, IconButton, Button } from '@mui/material';
import { Send, Smile } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

export default function CommentSection({ recipeId }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentInputRef, setCommentInputRef] = useState(null);

  useEffect(() => {
    // Load comments from localStorage
    const savedComments = localStorage.getItem(`recipe-${recipeId}-comments`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [recipeId]);

  const handleAddComment = () => {
    if (newCommentText.trim() === '') return;
    const comment = {
      id: Date.now(),
      author: 'Anonymous User',
      text: newCommentText.trim(),
      date: new Date().toLocaleString(),
    };
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem(`recipe-${recipeId}-comments`, JSON.stringify(newComments));
    setNewCommentText('');
  };

  const handleEmojiClick = (emojiObject) => {
    if (commentInputRef) {
      const input = commentInputRef;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const text = newCommentText;
      const newText = text.slice(0, start) + emojiObject.emoji + text.slice(end);
      setNewCommentText(newText);
      setTimeout(() => {
        input.focus();
        input.selectionStart = input.selectionEnd = start + emojiObject.emoji.length;
      }, 0);
    } else {
      setNewCommentText(prev => prev + emojiObject.emoji);
    }
    setShowEmojiPicker(false);
  };

  return (
    <Box sx={{ mt: 6, bgcolor: 'white', p: 4, borderRadius: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
      <Typography variant="h6" sx={{ color: '#2D5016', fontWeight: 600, mb: 3 }}>
        Comments ({comments.length})
      </Typography>
      {comments.length === 0 ? (
        <Typography variant="body2" sx={{ color: 'rgba(45, 80, 22, 0.7)', mb: 3 }}>
          No comments yet. Be the first to leave one!
        </Typography>
      ) : (
        <List sx={{ mb: 3 }}>
          {comments.map((comment) => (
            <ListItem 
              key={comment.id} 
              sx={{
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                py: 1.5, 
                bgcolor: '#F0EAD6',
                borderRadius: 2,
                mb: 1,
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2D5016' }}>
                  {comment.author}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(45, 80, 22, 0.6)' }}>
                  {comment.date}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#2D5016', lineHeight: 1.5 }}>
                {comment.text}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" sx={{ color: '#2D5016', fontWeight: 600, mb: 0 }}>
          Leave a Comment
        </Typography>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <TextField
            label="Your Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newCommentText}
            inputRef={ref => setCommentInputRef(ref)}
            onClick={e => { if (commentInputRef) commentInputRef.selectionStart = e.target.selectionStart; }}
            onSelect={e => { if (commentInputRef) commentInputRef.selectionStart = e.target.selectionStart; }}
            onChange={e => setNewCommentText(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#F9F9F9',
                '&:hover fieldset': { borderColor: '#FF6B35' },
                '&.Mui-focused fieldset': { borderColor: '#FF6B35', borderWidth: '2px' },
              },
              '& .MuiInputLabel-root': { color: '#2D5016' },
            }}
          />
          <IconButton
            onClick={() => setShowEmojiPicker(val => !val)}
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              bgcolor: '#fff',
              boxShadow: 1,
              zIndex: 2,
              '&:hover': { bgcolor: '#F0F0F0' },
            }}
          >
            <Smile size={22} />
          </IconButton>
          {showEmojiPicker && (
            <Box sx={{ position: 'absolute', bottom: 60, right: 0, zIndex: 10 }}>
              <EmojiPicker onEmojiClick={handleEmojiClick} theme="light" width={320} height={400} />
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          endIcon={<Send size={20} />}
          onClick={handleAddComment}
          sx={{
            bgcolor: '#FF6B35',
            color: 'white',
            fontWeight: 600,
            py: 1.5,
            borderRadius: 2,
            '&:hover': {
              bgcolor: '#FF5722',
            },
          }}
        >
          Post Comment
        </Button>
      </Box>
    </Box>
  );
} 