#!/bin/sh

echo "Releasing packages..."

echo "Releasing @cel_cash/core..."
pnpm --filter @cel_cash/core release

echo "Releasing @cel_cash/client..."
pnpm --filter @cel_cash/client release

echo "Releasing @cel_cash/nestjs..."
pnpm --filter @cel_cash/nestjs release

echo "Releasing @cel_cash/adonisjs..."
pnpm --filter @cel_cash/adonisjs release

echo "Creating a new tag..."
pnpm release-it