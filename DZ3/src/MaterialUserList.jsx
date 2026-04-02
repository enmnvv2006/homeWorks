import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

export default function MaterialUserList({ users }) {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Material UI
      </Typography>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ height: '100%', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.username}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Phone:</strong> {user.phone}<br />
                  <strong>Company:</strong> {user.company.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
