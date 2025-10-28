import { Card, CardContent, Typography } from "@mui/material";

export default function FundSummaryCard({ title, value }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{value}</Typography>
      </CardContent>
    </Card>
  );
}
