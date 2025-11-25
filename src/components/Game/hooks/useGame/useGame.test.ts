import { renderHook } from "@testing-library/react";
import useGame from "./useGame";
import { act } from "react";

describe("useGame", () => {
  test("initializes game", () => {
    const x = 1;
    const y = 2;
    const facing = 3;

    const { result } = renderHook(() =>
      useGame({ x, y, facing }, { cols: 5, rows: 5 })
    );

    expect(result.current.position).toEqual({ x, y, facing });
  });

  test("moves robot", () => {
    const { result } = renderHook(() =>
      useGame({ x: 0, y: 0, facing: 1 }, { cols: 5, rows: 5 })
    );

    act(() => result.current.move());

    expect(result.current.position).toEqual({ x: 1, y: 0, facing: 1 });
  });

  test("left turns robot", () => {
    const { result } = renderHook(() =>
      useGame({ x: 0, y: 0, facing: 0 }, { cols: 5, rows: 5 })
    );

    act(() => result.current.left());

    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 3 });
  });

  test("right turns robot", () => {
    const { result } = renderHook(() =>
      useGame({ x: 0, y: 0, facing: 0 }, { cols: 5, rows: 5 })
    );

    act(() => result.current.right());

    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 1 });
  });

  test("starts new game", () => {
    const x = 1;
    const y = 2;
    const facing = 3;

    const { result } = renderHook(() =>
      useGame({ x, y, facing }, { cols: 5, rows: 5 })
    );

    act(() => result.current.move());
    act(() => result.current.left());
    act(() => result.current.newGame());

    expect(result.current.position).toEqual({ x, y, facing });
  });

  test("prevents moving out of bounds", () => {
    const { result } = renderHook(() =>
      useGame({ x: 0, y: 0, facing: 0 }, { cols: 1, rows: 1 })
    );

    act(() => result.current.move());
    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 0 });

    act(() => result.current.right());
    act(() => result.current.move());
    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 1 });

    act(() => result.current.right());
    act(() => result.current.move());
    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 2 });

    act(() => result.current.right());
    act(() => result.current.move());
    expect(result.current.position).toEqual({ x: 0, y: 0, facing: 3 });
  });
});
