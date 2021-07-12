import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ThemeWrapper from 'theme/ThemeWrapper';
import Tag from '..';

describe('<Tag />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders <Tag /> components', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag>tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag'))
      .toHaveTextContent('tag');
  });

  it('renders <Tag /> props color \'primary\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="primary">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-primary/);
  });

  it('renders <Tag /> props color \'secondary\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="secondary">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-secondary/);
  });

  it('renders <Tag /> props color \'success\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="success">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-success/);
  });

  it('renders <Tag /> props color \'warning\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="warning">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-warning/);
  });

  it('renders <Tag /> props color \'error\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="error">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-error/);
  });

  it('renders <Tag /> props color \'info\'', () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Tag color="info">tag</Tag>
      </ThemeWrapper>,
    );
    expect(getByTestId('tag').className)
      .toMatch(/makeStyles-info/);
  });
});
